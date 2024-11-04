interface Config {
    endpoint: string;
    // readonly endpoint:string; endpoint ko hi agr readonly krna ho
    apiKey: string;
}
  
const config: Readonly<Config> = {
    endpoint: 'https://api.example.com',
    apiKey: 'abcdef123456',
};
  
// config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.

// When you have a configuration object that should not be altered after initialization, making it Readonly ensures
// its properties cannot be changed.