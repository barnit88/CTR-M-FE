export class AppSettings {
  // public static API_ROOT = 'http://localhost:55491/api/';

  // public static API_ROOT = 'https://localhost:8085/api/';
  public static API_ROOT = 'https://192.168.1.75:8085/api/';
  //public static API_ROOT = 'http://pmsdeploy.azurewebsites.net/api/';

  public static APP_NAME: string;

  constructor() {
    AppSettings.APP_NAME = 'Kamakhya Construction Pvt Ltd';
  }

  get APP_NAME() {
    return AppSettings.APP_NAME;
  }
}
//main
