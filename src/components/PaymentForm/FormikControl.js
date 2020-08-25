import React, { useCallback } from "react";
import { Field, ErrorMessage } from "formik";

import * as S from "./styles";

import masks from "./masks";

const FormikControl = ({ label, name, ...rest }) => {
  const onChange = useCallback((event, form) => {
    form.handleChange(event);

    const { name, value } = event.target;
    const mask = masks(name);

    if (mask) {
      const formattedValue = mask(value);
      form.setFieldValue(name, formattedValue);
    }
  }, []);

  return (
    <S.InputBlock>
      <S.Label htmlFor={name}>{label}</S.Label>

      <Field name={name}>
        {({ field, meta, form }) => (
          <S.Input
            id={name}
            {...rest}
            {...field}
            onChange={(e) => onChange(e, form)}
            error={meta.error && meta.touched}
          />
        )}
      </Field>

      <ErrorMessage component={S.TextError} name={name} />
    </S.InputBlock>
  );
};

export default FormikControl;
