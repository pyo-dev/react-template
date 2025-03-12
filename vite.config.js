import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
	let port = 4000; // 기본 포트

	// 모드에 따른 포트 설정
	if (mode === 'staging') {
		port = 5000;
	} else if (mode === 'production') {
		port = 6000;
	}

	return {
		plugins: [react()],
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src'),
			},
		},
		server: {
			open: true,
			host: '0.0.0.0',
			port: port,  // 설정된 포트를 사용
		},
		build: {
			assetsInlineLimit: 0,
			rollupOptions: {
				output: {
					// JS 파일 출력 경로
					entryFileNames: 'assets/js/[name]-[hash].js',
					// CSS 파일 출력 경로
					chunkFileNames: 'assets/js/[name]-[hash].js',
					assetFileNames: (assetInfo) => {
						const extMap = {
							img : ['.svg', '.gif', '.jpeg', '.jpg', '.png'], // 이미지 파일 설정
							font : ['.woff', '.woff2', '.ttf', '.otf', '.eot'], // 폰트 파일 설정
						}
						// 파일 확장자에 따라 출력 경로 설정
						if (assetInfo.name.endsWith('.css')) {
							return 'assets/css/[name]-[hash][extname]';
						}
						if (extMap.img.some(ext => assetInfo.name.endsWith(ext))) {
							return 'assets/img/[name]-[hash][extname]';
						}
						if (extMap.font.some(ext => assetInfo.name.endsWith(ext))) {
							return 'assets/font/[name]-[hash][extname]';
						}
						return 'assets/[name]-[hash][extname]';
					},
				},
			},
		},
	};
});
