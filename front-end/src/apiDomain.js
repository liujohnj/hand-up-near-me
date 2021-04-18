export function apiDomain() {
    const production = process.env.NODE_ENV === 'production';
    return production ? '' : 'http://localhost:5000';
}