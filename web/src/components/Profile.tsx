import Image from 'next/image'

import { getUser } from '../lib/auth'

export function Profile() {
  const { name, avatarUrl } = getUser()

  return (
    <div className="flex items-center gap-3 text-left">
      <Image
        src={avatarUrl}
        width={40}
        height={40}
        alt={`Imagem de perfil de ${name}`}
        className="h-10 w-10 rounded-full"
      />

      <p className="max-w-[140px] text-sm leading-snug">
        {name.substring(0, 16)}
        <a
          href="/api/auth/logout"
          className="block text-red-400 hover:text-red-300"
        >
          Deslogar
        </a>
      </p>
    </div>
  )
}
