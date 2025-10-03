export const obtentionLabelMap: Record<string, string> = {
  BOSS: 'boss',
  MOB: 'monstre',
  PLACE: 'lieu',
  DONJON_REWARD: 'récompense de donjon',
};

export function formatLabel(key: string, mapping?: Record<string, string>): string {
  const mapped = mapping && mapping[key];
  const base = mapped ?? key.replace(/_/g, ' ').toLowerCase();
  return base.charAt(0).toUpperCase() + base.slice(1);
}