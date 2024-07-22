

export function ValidateImage(image) {

    let validImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']
    let errors = {}
    if (image === null) {
        errors.image = 'select a book image to submit'
        return errors
    }
    const type = image?.type
    if (!validImageTypes.includes(type)) {
        errors.image = 'select an image with valid format'
        return errors
    }
    return errors
}