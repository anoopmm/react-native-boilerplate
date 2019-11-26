import React, { useState } from 'react';

const withFieldState = (initialState) => {
    const [fieldState, setFieldState] = useState({ ...initialState });
    const updatefieldState = (key, value) => {
        setFieldState({
            ...fieldState,
            [key]: value
        })
    }
    return {
        fieldState,
        updatefieldState
    }
}

const withErrState = (initialState) => {
    const [errState, setErrState] = useState({ ...initialState });
    const updateErrState = (key, value) => {
        setErrState({
            [key]: value
        })
    }
    const updateErrStateCombined = (completeObject) => {
        setErrState({
            ...errState,
            ...completeObject
        });
    }
    const resetToDefault = () => {
        setErrState({
            ...initialState
        })
    }
    return {
        errState,
        updateErrState,
        resetToDefault,
        updateErrStateCombined
    }
}

const withEmptyValidattion = ({ config, fieldState, errState, updateErrStateCombined }) => {
    const { fields } = config;
    const checkEmptyValidation = () => {
        if (fields && fields.length) {
            if (fieldState) {
                let errStateCopy = { ...errState };
                let flag = true;
                fields.forEach((fieldItem) => {
                    if (fieldItem.emptyValidation) {
                        if (!fieldState[fieldItem.field].length) {
                            errStateCopy[fieldItem.field + 'Err'] = fieldItem.emptyErrMsg;
                            flag = false;
                        } else {
                            errStateCopy[fieldItem.field + 'Err'] = '';
                        }
                    }
                })
                updateErrStateCombined && updateErrStateCombined(errStateCopy);
                return flag
            }
        }
    }
    return {
        checkEmptyValidation
    }
}

export const formLogic = ({ initialFieldState, initialErrState, config }) => {
    const { fieldState, updatefieldState } = withFieldState(initialFieldState);
    const { errState, updateErrState, resetToDefault, updateErrStateCombined } = withErrState(initialErrState);
    const { checkEmptyValidation } = withEmptyValidattion({ fieldState, errState, updateErrStateCombined, config });
    return {
        fieldState,
        errState,
        updatefieldState,
        checkEmptyValidation,
        updateErrState,
        resetToDefault
    }
}


