import './styles/global.scss';
import App from './App.svelte';
import { $ } from '$shared/utils';

const target = $()
  .create('leadfisher')
  .setProp('id', 'leadfisher-mainframe')
  .appendTo(document.body)
  .get();

const app = new App({ target, intro: true });
export default app;
