import { ReactElement } from 'react';
import { UseQueryResult } from '@tanstack/react-query';
export interface HandleBoundaryProps<T, E> {
    /**
     * useQuery返回值
     */
    query: UseQueryResult<T, E>;
    /**
     * data为请求的响应结果
     */
    children: (data: T) => ReactElement;
    /**
     * Loading组件
     */
    loadingComponent?: ReactElement;
}
declare const HandleBoundary: <T extends unknown, E = unknown>({ query, children, loadingComponent, }: HandleBoundaryProps<T, E>) => JSX.Element;
export default HandleBoundary;
