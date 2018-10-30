import { environment } from './../../environments/environment.staging';

const BASE_URL: string = environment.production ? '' : 'http://localhost:8080';

export const DEFAULT_IMAGE_PATH: string = 'assets/images/defaults/default-image.png';
export const LOADING_GIF_PATH: string = 'assets/images/tools/loading.gif';
