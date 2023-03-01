
import APIClient from '@/services/APIClient';


// Twitter アカウントと連携するための認証 URL を表すインターフェイス
export interface ITwitterAuthURL {
    authorization_url: string;
}

// ツイートの送信結果を表すインターフェイス
export interface ITweetResult {
    is_success: boolean;
    tweet_url?: string;
    detail: string;
}


class Niconico {

    /**
     * Twitter アカウントと連携するための認証 URL を取得する
     * @returns 認証 URL or 認証 URL の取得に失敗した場合は null
     */
    static async fetchAuthorizationURL(): Promise<string | null> {

        // API リクエストを実行
        const response = await APIClient.get<ITwitterAuthURL>('/twitter/auth');

        // エラー処理
        if ('is_error' in response) {
            APIClient.showGenericError(response, 'Twitter アカウントとの連携用の認証 URL を取得できませんでした。');
            return null;
        }

        return response.data.authorization_url;
    }


    /**
     * 現在ログイン中のユーザーアカウントに紐づく Twitter アカウントとの連携を解除する
     * @param screen_name Twitter のスクリーンネーム
     * @returns 連携解除に成功した場合は true, 失敗した場合は false
     */
    static async logoutAccount(screen_name: string): Promise<boolean> {

        // API リクエストを実行
        const response = await APIClient.delete(`/twitter/accounts/${screen_name}`);

        // エラー処理
        if ('is_error' in response) {
            APIClient.showGenericError(response, 'Twitter アカウントとの連携を解除できませんでした。');
            return false;
        }

        return true;
    }


    /**
     * ツイートを送信する
     * @param screen_name Twitter のスクリーンネーム
     * @param text ツイート本文
     * @param captures 添付するキャプチャ画像
     * @param message_callback ツイートの送信結果の文字列を受け取るコールバック関数 (プレイヤー側の通知用メソッドに渡すことを想定)
     */
    static async sendTweet(screen_name: string, text: string, captures: Blob[], message_callback: (message: string) => void): Promise<void> {

        // multipart/form-data でツイート本文と画像（選択されている場合）を送る
        const form_data = new FormData();
        form_data.append('tweet', text);
        for (const tweet_capture of captures) {
            form_data.append('images', tweet_capture);
        }

        // API リクエストを実行
        const response = await APIClient.post<ITweetResult>(`/twitter/accounts/${screen_name}/tweets`, form_data, {
            headers: {'Content-Type': 'multipart/form-data'},
        });

        // エラー処理 (API リクエスト自体に失敗した場合)
        if ('is_error' in response) {
            message_callback('エラー: ツイートの送信に失敗しました。');
            return;
        }

        // 成功 or 失敗に関わらず detail の内容をそのまま通知する
        if (response.data.is_success === true) {
            // ツイート成功
            message_callback(response.data.detail);
        } else {
            // ツイート失敗
            message_callback(`エラー: ${response.data.detail}`);
        }
    }
}

export default Niconico;
