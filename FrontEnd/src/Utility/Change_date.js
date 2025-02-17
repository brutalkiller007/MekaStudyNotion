export function convertToReadableDate(dateString) {
    const date = new Date(dateString);

    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric', 
        hour12: true 
    };

    return date.toLocaleString('en-US', options);
}
