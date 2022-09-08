import { jsx, jsxs, Fragment as Fragment$1 } from 'react/jsx-runtime';
import cn from 'classnames';
import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronUpDownIcon, CheckIcon } from '@heroicons/react/20/solid';

/**
 * Primary UI component for user interaction
 */ const Button = ({ primary =false , size ="medium" , backgroundColor , label , ...props })=>{
    return /*#__PURE__*/ jsx("button", {
        type: "button",
        className: cn("bg-primary dark:bg-black text-red-300 px-2 w-[60px]"),
        style: {
            backgroundColor
        },
        ...props,
        children: label
    });
};

const Loading = ()=>/*#__PURE__*/ jsx("div", {
        className: "flex h-full items-center justify-center",
        children: /*#__PURE__*/ jsxs("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            className: "h-5 w-5 fill-current text-primary",
            children: [
                /*#__PURE__*/ jsxs("rect", {
                    x: "0",
                    y: "7",
                    width: "4",
                    height: "6",
                    children: [
                        /*#__PURE__*/ jsx("animate", {
                            attributeName: "height",
                            values: "6;20;6",
                            begin: "0s",
                            dur: "0.6s",
                            repeatCount: "indefinite"
                        }),
                        /*#__PURE__*/ jsx("animate", {
                            attributeName: "y",
                            values: "7;0;7",
                            begin: "0s",
                            dur: "0.6s",
                            repeatCount: "indefinite"
                        }),
                        /*#__PURE__*/ jsx("animate", {
                            attributeName: "opacity",
                            values: "0.3;1;0.3",
                            begin: "0s",
                            dur: "0.6s",
                            repeatCount: "indefinite"
                        })
                    ]
                }),
                /*#__PURE__*/ jsxs("rect", {
                    x: "7",
                    y: "7",
                    width: "4",
                    height: "6",
                    children: [
                        /*#__PURE__*/ jsx("animate", {
                            attributeName: "height",
                            values: "6;20;6",
                            begin: "0.2s",
                            dur: "0.6s",
                            repeatCount: "indefinite"
                        }),
                        /*#__PURE__*/ jsx("animate", {
                            attributeName: "y",
                            values: "7;0;7",
                            begin: "0.2s",
                            dur: "0.6s",
                            repeatCount: "indefinite"
                        }),
                        /*#__PURE__*/ jsx("animate", {
                            attributeName: "opacity",
                            values: "0.3;1;0.3",
                            begin: "0.2s",
                            dur: "0.6s",
                            repeatCount: "indefinite"
                        })
                    ]
                }),
                /*#__PURE__*/ jsxs("rect", {
                    x: "14",
                    y: "7",
                    width: "4",
                    height: "6",
                    children: [
                        /*#__PURE__*/ jsx("animate", {
                            attributeName: "height",
                            values: "6;20;6",
                            begin: "0.4s",
                            dur: "0.6s",
                            repeatCount: "indefinite"
                        }),
                        /*#__PURE__*/ jsx("animate", {
                            attributeName: "y",
                            values: "7;0;7",
                            begin: "0.4s",
                            dur: "0.6s",
                            repeatCount: "indefinite"
                        }),
                        /*#__PURE__*/ jsx("animate", {
                            attributeName: "opacity",
                            values: "0.3;1;0.3",
                            begin: "0.4s",
                            dur: "0.6s",
                            repeatCount: "indefinite"
                        })
                    ]
                })
            ]
        })
    });

const HandleBoundary = ({ query , children , loadingComponent =/*#__PURE__*/ jsx(Loading, {}) ,  })=>{
    if (query.isLoading) return loadingComponent;
    if (query.isSuccess) return children(query.data);
    return /*#__PURE__*/ jsxs("div", {
        children: [
            /*#__PURE__*/ jsx("p", {
                className: "my-4 text-primary",
                children: "请求发生错误，请重试"
            }),
            /*#__PURE__*/ jsx("button", {
                onClick: ()=>query.refetch(),
                children: "点击重试"
            })
        ]
    });
};

const Select = ({ onChange , data , selected  })=>{
    return /*#__PURE__*/ jsx("div", {
        className: "fixed top-16 w-72",
        children: /*#__PURE__*/ jsx(Listbox, {
            value: selected,
            onChange: (v)=>onChange(v),
            children: /*#__PURE__*/ jsxs("div", {
                className: "relative mt-1",
                children: [
                    /*#__PURE__*/ jsxs(Listbox.Button, {
                        className: "relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm",
                        children: [
                            /*#__PURE__*/ jsx("span", {
                                className: "block truncate",
                                children: selected.name
                            }),
                            /*#__PURE__*/ jsx("span", {
                                className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",
                                children: /*#__PURE__*/ jsx(ChevronUpDownIcon, {
                                    className: "h-5 w-5 text-gray-400",
                                    "aria-hidden": "true"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx(Transition, {
                        as: Fragment,
                        leave: "transition ease-in duration-100",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        children: /*#__PURE__*/ jsx(Listbox.Options, {
                            static: true,
                            className: "absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
                            children: data.map((item, index)=>/*#__PURE__*/ jsx(Listbox.Option, {
                                    className: ({ active  })=>`relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-amber-100 text-amber-900" : "text-gray-900"}`,
                                    value: item,
                                    children: ({ selected  })=>/*#__PURE__*/ jsxs(Fragment$1, {
                                            children: [
                                                /*#__PURE__*/ jsx("span", {
                                                    className: `block truncate ${selected ? "font-medium" : "font-normal"}`,
                                                    children: item.name
                                                }),
                                                selected ? /*#__PURE__*/ jsx("span", {
                                                    className: "absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600",
                                                    children: /*#__PURE__*/ jsx(CheckIcon, {
                                                        className: "h-5 w-5",
                                                        "aria-hidden": "true"
                                                    })
                                                }) : null
                                            ]
                                        })
                                }, index))
                        })
                    })
                ]
            })
        })
    });
};

export { Button, HandleBoundary, Loading, Select };
