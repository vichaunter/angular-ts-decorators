import * as angular from 'angular';
import { NgModule } from './module';
export declare const Type: FunctionConstructor;
export declare function isType(v: any): v is Type<any>;
export interface Type<T> extends Function {
  new (...args: any[]): T;
}

export interface CompilerOptions {
  strictDi?: boolean;
}

export const platformBrowserDynamic = () => PlatformRef;

export const PlatformRef = {
  /**
   * Creates an instance of an `@NgModule` for a given platform using the given runtime compiler.
   *
   * ## Simple Example
   *
   * ```typescript
   * @NgModule({
   *   imports: [BrowserModule]
   * })
   * class MyModule {}
   *
   * let moduleRef = platformBrowser().bootstrapModule(MyModule);
   * ```
   */
  bootstrapModule: (moduleType: Type<any>, compilerOptions?: CompilerOptions) => {
    let strictDi = true;
    if (compilerOptions) strictDi = compilerOptions.strictDi;

    angular.element(document).ready(() => {
      angular.bootstrap(document, [(moduleType as NgModule).module.name], { strictDi });
    });
  }
};