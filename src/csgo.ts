export interface GameMap {
  imageSrc: string;
  label: string;
  uuid: string;
}

export const GameMapList: GameMap[] = [
  { label: 'Mirage', imageSrc: '/csgo/mirage.jpg', uuid: 'de_mirage' },
  { label: 'Dust II', imageSrc: '/csgo/dust2.jpg', uuid: 'de_dust2' },
  { label: 'Inferno', imageSrc: '/csgo/inferno.jpg', uuid: 'de_inferno' },
  { label: 'Vertigo', imageSrc: '/csgo/vertigo.jpg', uuid: 'de_vertigo' },
  { label: 'Overpass', imageSrc: '/csgo/overpass.jpg', uuid: 'de_overpass' },
  { label: 'Nuke', imageSrc: '/csgo/nuke.jpg', uuid: 'de_nuke' },
  { label: 'Ancient', imageSrc: '/csgo/ancient.jpg', uuid: 'de_ancient' }
];
