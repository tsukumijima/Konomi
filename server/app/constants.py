
import inspect
import logging
import os
import ruamel.yaml
import secrets
import sys
import uvicorn.logging
from pathlib import Path
from typing import Any, Dict, Literal


# バージョン
VERSION = '0.6.0-dev'

# ベースディレクトリ
BASE_DIR = Path(__file__).resolve().parent.parent

# Aerich（マイグレーションツール）からのインポート時に設定ファイルのロードをスキップ
if len(inspect.stack()) > 8 and inspect.stack()[8].function == 'get_tortoise_config':

    # ダミーの CONFIG を用意（インポートエラーの回避のため）
    CONFIG: Dict[str, Dict[str, Any]] = {'general': {'debug': True}}  # Logging モジュールの初期化に必要

else:

    # 設定ファイルのパス
    CONFIG_YAML = BASE_DIR.parent / 'config.yaml'
    if Path.exists(CONFIG_YAML) is False:
        # ここで Logging モジュールをインポートするといろいろこじれるので、独自にロギング設定をする
        logger = logging.getLogger()
        handler = logging.StreamHandler()
        handler.setFormatter(uvicorn.logging.DefaultFormatter(
            fmt = '[%(asctime)s] %(levelprefix)s %(message)s',
            datefmt = '%Y/%m/%d %H:%M:%S',
            use_colors = sys.stderr.isatty(),
        ))
        logger.addHandler(handler)
        logger.error(
            '設定ファイルが配置されていないため、KonomiTV を起動できません。\n'
            '                                '  # インデント用
            'config.example.yaml を config.yaml にコピーし、お使いの環境に合わせて編集してください。'
        )
        sys.exit(1)

    # 環境設定を読み込む
    with open(CONFIG_YAML, encoding='utf-8') as file:
        CONFIG: Dict[str, Dict[str, Any]] = ruamel.yaml.YAML().load(file)

# 品質の種類の型定義
QUALITY_TYPES = Literal['1080p-60fps', '1080p', '810p', '720p', '540p', '480p', '360p', '240p']

# 映像と音声の品質
QUALITY: Dict[QUALITY_TYPES, Dict[str, int | str]] = {
    '1080p-60fps': {
        'width': 1440,  # 縦解像度 (フル HD で放送されているチャンネルでは 1920 に設定される)
        'height': 1080,  # 横解像度
        'video_bitrate': '6500K',  # 映像ビットレート
        'video_bitrate_max': '9000K',  # 映像最大ビットレート
        'audio_bitrate': '192K',  # 音声ビットレート
    },
    '1080p': {
        'width': 1440,
        'height': 1080,
        'video_bitrate': '6500K',
        'video_bitrate_max': '9000K',
        'audio_bitrate': '192K',
    },
    '810p': {
        'width': 1440,
        'height': 810,
        'video_bitrate': '5500K',
        'video_bitrate_max': '7600K',
        'audio_bitrate': '192K',
    },
    '720p': {
        'width': 1280,
        'height': 720,
        'video_bitrate': '4500K',
        'video_bitrate_max': '6200K',
        'audio_bitrate': '192K',
    },
    '540p': {
        'width': 940,
        'height': 540,
        'video_bitrate': '3000K',
        'video_bitrate_max': '4100K',
        'audio_bitrate': '192K',
    },
    '480p': {
        'width': 720,
        'height': 480,
        'video_bitrate': '2000K',
        'video_bitrate_max': '2800K',
        'audio_bitrate': '192K',
    },
    '360p': {
        'width': 640,
        'height': 360,
        'video_bitrate': '1100K',
        'video_bitrate_max': '1800K',
        'audio_bitrate': '128K',
    },
    '240p': {
        'width': 426,
        'height': 240,
        'video_bitrate': '550K',
        'video_bitrate_max': '650K',
        'audio_bitrate': '128K',
    },
}

# クライアントの静的ファイルがあるディレクトリ
CLIENT_DIR = BASE_DIR.parent / 'client/dist'

# データディレクトリ
DATA_DIR = BASE_DIR / 'data'
## アカウントのアイコン画像があるディレクトリ
ACCOUNT_ICON_DIR = DATA_DIR / 'account-icons'
## サムネイル画像があるディレクトリ
THUMBNAIL_DIR = DATA_DIR / 'thumbnails'

# スタティックディレクトリ
STATIC_DIR = BASE_DIR / 'static'
## ロゴファイルがあるディレクトリ
LOGO_DIR = STATIC_DIR / 'logos'
## デフォルトのアイコン画像があるディレクトリ
ACCOUNT_ICON_DEFAULT_DIR = STATIC_DIR / 'account-icons'
## jikkyo_channels.json があるパス
JIKKYO_CHANNELS_PATH = STATIC_DIR / 'jikkyo_channels.json'

# ログディレクトリ
LOGS_DIR = BASE_DIR / 'logs'
## KonomiTV のサーバーログのパス
KONOMITV_SERVER_LOG_PATH = LOGS_DIR / 'KonomiTV-Server.log'
## KonomiTV のアクセスログのパス
KONOMITV_ACCESS_LOG_PATH = LOGS_DIR / 'KonomiTV-Access.log'
## Akebi (HTTPS リバースプロキシ) のログファイルのパス
AKEBI_LOG_PATH = LOGS_DIR / 'Akebi-HTTPS-Server.log'

# サードパーティーライブラリのあるディレクトリ
LIBRARY_DIR = BASE_DIR / 'thirdparty'

# サードパーティーライブラリのあるパス
LIBRARY_EXTENSION = ('.exe' if os.name == 'nt' else '.elf')
LIBRARY_PATH = {
    'Akebi': str(LIBRARY_DIR / 'Akebi/akebi-https-server') + LIBRARY_EXTENSION,
    'FFmpeg': str(LIBRARY_DIR / 'FFmpeg/ffmpeg') + LIBRARY_EXTENSION,
    'FFprobe': str(LIBRARY_DIR / 'FFmpeg/ffprobe') + LIBRARY_EXTENSION,
    'QSVEncC': str(LIBRARY_DIR / 'QSVEncC/QSVEncC') + LIBRARY_EXTENSION,
    'NVEncC': str(LIBRARY_DIR / 'NVEncC/NVEncC') + LIBRARY_EXTENSION,
    'tsreadex': str(LIBRARY_DIR / 'tsreadex/tsreadex') + LIBRARY_EXTENSION,
    'VCEEncC': str(LIBRARY_DIR / 'VCEEncC/VCEEncC') + LIBRARY_EXTENSION,
}

# データベース (Tortoise ORM) の設定
DATABASE_CONFIG = {
    'timezone': 'Asia/Tokyo',
    'connections': {
        'default': f'sqlite://{str(DATA_DIR / "database.sqlite")}',
    },
    'apps': {
        'models': {
            'models': ['app.models', 'aerich.models'],
            'default_connection': 'default',
        }
    }
}

# 外部 API に送信するリクエストヘッダー
## KonomiTV のユーザーエージェントを指定
API_REQUEST_HEADERS: Dict[str, str] = {
    'User-Agent': f'KonomiTV/{VERSION}',
}

# ニコニコ OAuth の Client ID
NICONICO_OAUTH_CLIENT_ID = '4JTJdyBZLwMJwaI7'

# JWT のエンコード/デコードに使うシークレットキー
## jwt_secret.dat がない場合は自動生成する
JWT_SECRET_KEY_PATH = DATA_DIR / 'jwt_secret.dat'
if Path.exists(JWT_SECRET_KEY_PATH) is False:
    with open(JWT_SECRET_KEY_PATH, mode='w', encoding='utf-8') as fp:
        fp.write(secrets.token_hex(32))  # 32ビット (256文字) の乱数を書き込む
## jwt_secret.dat からシークレットキーを読み込む
with open(JWT_SECRET_KEY_PATH, encoding='utf-8') as fp:
    JWT_SECRET_KEY = fp.read().strip()

# Docker 上で実行されているとき、ファイルシステムの Prefix を定義
## /host-rootfs (docker-compose.yaml で定義) を通してホストマシンのファイルシステムにアクセスできる
DOCKER_FS_PREFIX = ''
if Path.exists(Path('/.dockerenv')) is True:
    DOCKER_FS_PREFIX = '/host-rootfs'
