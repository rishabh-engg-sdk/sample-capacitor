export interface MyPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;

  openMap(location: { latitude: number; longitude: number }): Promise<void>;
}
