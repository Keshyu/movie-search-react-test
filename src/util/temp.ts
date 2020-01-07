export function fullImagePath(imageFile: string): string {
    return process.env.PUBLIC_URL + '/images/' + imageFile;
}