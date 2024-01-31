import * as anchor from '@project-serum/anchor';
import { Provider } from '@project-serum/anchor';

export default async function (provider: Provider) {
  // Configure client to use the provider.
  anchor.setProvider(provider);

  // Add your deploy script here.
};
