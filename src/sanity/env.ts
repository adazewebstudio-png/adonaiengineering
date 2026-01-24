export const apiVersion =
    process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-24'

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'v71cpkjf';

export const useCdn = true

export const token = process.env.SANITY_API_READ_TOKEN
