import { css as transformStyleObject } from "@theme-ui/css";
import { pseudos } from "./pseudos";

export const css = (styles) => (theme) => {
  return transformStyleObject(styles)(theme);
};

export function mapCssObject(obj) {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (key in pseudos) {
      key = pseudos[key];
    }

    if (value instanceof Object) {
      value = mapCssObject(value);
    }

    return { ...acc, [key]: value };
  }, {});
}

export function mapResponsive(prop, mapper) {
  if (Array.isArray(prop)) {
    return prop.map((value) => {
      if (value === null) {
        return null;
      }
      return mapper(value);
    });
  }

  if (prop !== null) {
    return mapper(prop);
  }

  return null;
}
