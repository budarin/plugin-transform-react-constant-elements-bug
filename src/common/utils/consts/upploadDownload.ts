import { ONE_KILOBYTE, ONE_MEGABYTE } from './size';

export const UPLOAD_ENDPOINT = '/upload';
export const DOWNLOAD_ENDPOINT = '/download';
export const UPLOAD_SERVICE_FOLDER = '/var/upload';

export const MAX_UPLOAD_FILE_NAME = ONE_KILOBYTE;
export const MAX_UPLOAD_FILE_SIZE = 25 * ONE_MEGABYTE;

export const WRONG_UPLOAD_FILE_TYPE = 'WRONG_UPLOAD_FILE_TYPE';
export const WRONG_UPLOAD_FILE_NAME = 'WRONG_UPLOAD_FILE_NAME';

export const EXCEEDED_UPLOAD_FILE_NAME_LENGTH = 'EXCEEDED_UPLOAD_FILE_NAME_LENGTH';
export const EXCEEDED_MAX_FILE_LENGTH = 'EXCEEDED_MAX_FILE_LENGTH';

export const allowedForUploadFileTypes = [
    {
        ext: 'txt',
        contentType: 'text/plain',
        signature: undefined,
        description: 'Текстовый документ',
    },
    {
        ext: 'md',
        contentType: 'text/markdown',
        signature: undefined,
        description: 'Markdown документ',
    },
    {
        ext: 'pdf',
        contentType: 'application/pdf',
        signature: __SERVER__ ? Buffer.from('25504446', 'hex') : undefined,
        description: 'Portable Document Format документ',
    },
    {
        ext: 'xlsx',
        contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        signature: __SERVER__ ? Buffer.from('504B0304', 'hex') : undefined,
        description: 'MS Office Open XML Format Excel документ',
    },
    {
        ext: 'xlsx',
        contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        signature: __SERVER__ ? Buffer.from('504B030414000600', 'hex') : undefined,
        description: 'MS Office 2007 Excel документ',
    },
    {
        ext: 'docx',
        contentType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        signature: __SERVER__ ? Buffer.from('504B030414000600', 'hex') : undefined,
        description: 'MS Office 2007 Word документ',
    },
    {
        ext: 'docx',
        contentType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        signature: __SERVER__ ? Buffer.from('504B0304', 'hex') : undefined,
        description: 'MS Office Open XML Format Word документ',
    },
];
