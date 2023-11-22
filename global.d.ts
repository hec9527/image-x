declare module '*.png';

interface AnyFunction {
    (...args: any[]): any;
}

interface IRouter {
    path: string;
    // exact: boolean;
    component: React.LazyExoticComponent<any>;
}
