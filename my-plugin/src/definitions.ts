export interface MyPluginPlugin {
  echo(options: { value: string }): void;

  openMap(location: { latitude: number; longitude: number }): Promise<void>;
}
