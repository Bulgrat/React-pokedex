import { ApolloClient, InMemoryCache } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";


const client = new ApolloClient({
    link: new WebSocketLink({
        uri: 'wss://amazed-barnacle-39.hasura.app/v1/graphql',
        options: {
            reconnect: true,
            connectionParams: {
                headers: { 'x-hasura-admin-secret': 'qRhMmvh77wdIUJEtAXD7J4OXnwJ3aN7TYgHKfLssfIAEFSFA3OrBt0iZZ46ajo2M' },
            }
        }
    }),
    cache: new InMemoryCache()
});

export default client;