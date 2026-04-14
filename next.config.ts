import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // @ts-expect-error: Funcionalidade experimental, tipagem ainda não atualizada
    reactCompiler: true,
  },
};

export default nextConfig;
