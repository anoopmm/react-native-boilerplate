import React from 'react';
import { NavigationEvents } from 'react-navigation';
export const withNavigationListener = (methods) => (WrappedComponent) => (props) => {
    let componentRefs;
    const { handleWillFocus, handleDidFocus,
        handleWillBlur, handleDidBlur } = methods;

    const willFocusHandler = (e) => {
        return handleWillFocus && handleWillFocus(e, props, componentRefs)
    }

    const didFocusHandler = (e) => {
        return handleDidFocus && handleDidFocus(e, props, componentRefs)
    }

    const willBlurHandler = (e) => {
        return handleWillBlur && handleWillBlur(e, props, componentRefs)
    }

    const didBlurHandler = (e) => {
        return handleDidBlur && handleDidBlur(e, props, componentRefs)
    }

    return (
        <>
            <NavigationEvents
                onWillFocus={willFocusHandler}
                onDidFocus={didFocusHandler}
                onWillBlur={willBlurHandler}
                onDidBlur={didBlurHandler}
            />
            <WrappedComponent
                ref={(refs) => {
                    componentRefs = refs;
                }}
                {...props}
            />
        </>
    )
}

