import { Injectable } from '@angular/core';

interface Scripts {
  name: string;
  src: string;
}
export const ScriptStore: Scripts[] = [
  { name: 'Scripts', src: '../../assets/js/scripts.js' },
  { name: 'Scripts', src: '../../assets/js/scripts.js' }
];
@Injectable({
  providedIn: 'root'
})
export class ScriptService {
  private scripts: any = {};
  constructor() {
    ScriptStore.forEach((script: any) => {
      this.scripts[script.name] = {
        loaded: false,
        src: script.src
      };
    });
  }
  load() {
    const dynamicScripts = [
      '../../assets/js/scripts.js',
      '../../assets/js/map.js'
     ];
     for (let i = 0; i < dynamicScripts.length; i++) {
       const node = document.createElement('script');
       node.src = dynamicScripts[i];
       node.type = 'text/javascript';
       node.async = false;
       node.charset = 'utf-8';
       document.getElementsByTagName('head')[0].appendChild(node);
     }
  }
  

   
  

}
