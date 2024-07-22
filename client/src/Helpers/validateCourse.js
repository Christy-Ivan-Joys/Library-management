

export function ValidateCourse(title, author) {
    const titleRegex = /^[a-zA-Z0-9\s,'-:()!?.]*$/;
    const authorRegex = /^[a-zA-Z]+$/


    const errors = {};

    if (!title || !title.trim()) {
        errors.title = "Title cannot be empty.";
    } else if (!titleRegex.test(title)) {
        errors.title = "Enter a valid title.";
    }

    if (!author || !author.trim()) {
        errors.author = "Author name cannot be empty.";
    } else if (!authorRegex.test(author)) {
        errors.author = "Enter a valid author name.";
    }

    return errors;
}