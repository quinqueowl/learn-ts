## Module 0 - Setup dan cara menjalankan TS (tsc, tsx, Node langsung, Playground)

Berikut cara menjalankan typescript Version 7 dibawah ini:

```bash
mkdir belajar-ts && cd belajar-ts
npm init -y
npm install -D typescript @types/node
npx tsc -v        # harus menampilkan Version 7.x
npx tsc --init
```

lalu kalian ubah di package.json nya di bagian `type` dan `scripts` menjadi seperti dibawah ini:

```bash
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "tsc",
        "start": "node dist/index.js"
  },
    "type": "module",
```

Contoh `tsconfig.json` awal yang cocok dengan default TS 7:

```bash
{
  "compilerOptions": {
    "target": "es2022",
    "module": "nodenext",
    "rootDir": "src",
    "outDir": "dist",
    "strict": true,
    "types": ["node"],
    "skipLibCheck": true
  },
  "include": ["src"]
}
```

Tes dengan buat `src/index.ts`:

```ts
const pesan: string = "TypeScript 7 jalan!";
console.log(pesan);
```

lalu jalankan `npm run build` dan `npm start`, harusnya di console menunjukkan output:

```powershell
PS D:\coding\typescript\typescript-roadmapsh\module_1> npm start

> module_1@1.0.0 start
> node dist/index.js

Typescript 7 Jalan
```

PS D:\coding\typescript\typescript-roadmapsh\module_1> npm start

> module_1@1.0.0 start
> node dist/index.js

Typescript 7 Jalan
