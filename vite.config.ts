import { defineConfig } from 'vite'

export default defineConfig(({ command }) => ({
  base:
    command === 'build' && process.env.GITHUB_REPOSITORY
      ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/`
      : '/',
}))
