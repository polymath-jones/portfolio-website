import { FormikProps } from "formik";

function getFieldvalues(
  name: string,
  form: FormikProps<any>,
  type: "text" | "number" = "text"
) {
  const fromDotNotation = (place: any) => {
    if (name.includes(".")) {
      const parts = name.split(".");

      return place[parts[0]] ? place[parts[0]][parts[1]] : undefined;
    }
    return place[name];
  };

  // console.log(form.errors)

  return {
    name,
    value: fromDotNotation(form.values),
    onValueChange: (e: any) => {
      form.setFieldValue(name, e.toString());
    },
    onChange:
      type === "text"
        ? form.handleChange
        : (e: React.ChangeEvent<HTMLInputElement>) =>
            form.setFieldValue(
              name,
              Number.isNaN(Number(e.target?.value))
                ? 0
                : Number(e.target?.value)
            ),
    onBlur: form.handleBlur,
    error:
      fromDotNotation(form.touched) && fromDotNotation(form.errors)
        ? fromDotNotation(form.errors)
        : null,
    "data-has-error":
      fromDotNotation(form.touched) &&
      fromDotNotation(form.errors) !== undefined,
    errors: fromDotNotation(form.errors),
  };
}

export function generateAngle() {
  // Generate a random integer between 0 and 11 (inclusive)
  const randomMultiple = Math.floor(Math.random() * 12);

  // Multiply the random multiple by 30 to get the angle in degrees
  const angle = randomMultiple * 30;

  return angle;
}

export function selectRandomIndex(array: any[]) {
  // Check for empty array to avoid errors
  if (!array.length) {
    throw new Error("Cannot select from an empty array.");
  }

  // Generate a random integer within the array's length
  const randomIndex = Math.floor(Math.random() * array.length);

  return randomIndex;
}

export const getElem = (query: string) => {
  return document.querySelector(query) as HTMLElement;
};

export { getFieldvalues };
