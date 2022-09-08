/// <reference types="react" />
export interface DataType {
    value: string | number;
    name: string | number;
}
export interface SelectProps {
    /**
     * 数据改变时触发的回调
     */
    onChange: (current: DataType) => void;
    /**
     * 数据
     */
    data: DataType[];
    /**
     * 当前选中的数据
     */
    selected: DataType;
}
export declare const Select: ({ onChange, data, selected }: SelectProps) => JSX.Element;
export default Select;
