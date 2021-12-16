import { pseudoKeys } from "./pseudos";
import { css as themeCss } from "@theme-ui/css";

export function css({ sx, theme }) {
  return themeCss(mapCssObject(sx, theme))(theme);
}

export function mapCssObject(obj, theme) {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (key in pseudoKeys) {
      key = pseudoKeys[key];
    }

    if (value instanceof Object) {
      value = mapCssObject(value, theme);
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
      return mapper(prop);
    });
  }

  if (prop !== null) {
    return mapper(prop);
  }

  return null;
}
