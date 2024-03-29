import * as yup from "yup";

export const schema =
    yup.object().shape({
        name: yup.string().required("Required."),
        email: yup.string().email("Please provide a valid email.").required("Required."),
        date: yup.string().required("Please enter a date."),
        time: yup.string().required("Please enter a time."),
        guests: yup.number("Please insert a number between 1 and 10.").positive("Please insert a number between 1 and 10.").integer("Please insert a number between 1 and 10.").min(1, "Please insert a number between 1 and 10.").max(10, "Please insert a number between 1 and 10.").required("Please insert a number between 1 and 10."),
        occasion: yup.string().required("Required.")
    })
