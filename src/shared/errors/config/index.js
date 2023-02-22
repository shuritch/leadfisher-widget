import { setDefault } from '$shared/decorators';
import DOM from './DOM.json';
import MR from './MR.json';

const config = { DOM, Move: MR, Resize: MR };

const E404 = 'Description not found';
Object.keys(config).forEach(key => (config[key] = setDefault(config[key], E404)));

export default config;
