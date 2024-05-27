import grpc from 'k6/net/grpc';
import { uuidv4 } from 'https://jslib.k6.io/k6-utils/1.4.0/index.js';


const client = new grpc.Client();
client.load(
    ['proto'],
    'hello.proto',

);

// const grpc_client_scenarioCode92fb22b8775544cca7104c88c08e7c8e_0 = new grpc.Client();
// grpc_client_scenarioCode92fb22b8775544cca7104c88c08e7c8e_0.load('CqoHCglmZWUucHJvdG8SA2ZlZSJlChNRdWVyeUZlZVJhdGVMaXN0UmVxEiYKBHBhZ2UYASABKAsyEi5mZWUuUXVlcnlMaXN0UGFnZVIEcGFnZRImCgVxdWVyeRgCIAEoCzIQLmZlZS5GZWVSYXRlSXRlbVIFcXVlcnkiUQoTUXVlcnlGZWVSYXRlTGlzdFJlcxIkCgRsaXN0GAEgAygLMhAuZmVlLkZlZVJhdGVJdGVtUgRsaXN0EhQKBWNvdW50GAIgASgFUgVjb3VudCLnAwoLRmVlUmF0ZUl0ZW0SDgoCaWQYASABKAVSAmlkEhcKB3VzZXJfaWQYAiABKAVSBnVzZXJJZBIUCgVlbWFpbBgDIAEoCVIFZW1haWwSFQoGYWZmX2lkGAQgASgFUgVhZmZJZBI2Cg1jb250cmFjdF90eXBlGAUgASgOMhEuZmVlLkNvbnRyYWN0VHlwZVIMY29udHJhY3RUeXBlEioKCWV4ZWNfdHlwZRgGIAEoDjINLmZlZS5FeGVjVHlwZVIIZXhlY1R5cGUSHwoLZGlzY291bnRfZTQYByABKAVSCmRpc2NvdW50RTQSJAoOcmF0ZV9hY3R1YWxfZTgYCCABKAVSDHJhdGVBY3R1YWxFOBIWCgZzdGF0dXMYCSABKAVSBnN0YXR1cxIlCg9taW5fZW5kX3RpbWVfZTAYCiABKAVSDG1pbkVuZFRpbWVFMBIpChFtYXhfc3RhcnRfdGltZV9lMBgLIAEoBVIObWF4U3RhcnRUaW1lRTASJwoPZGlzY291bnRfcmVhc29uGAwgASgJUg5kaXNjb3VudFJlYXNvbhISCgRub3RlGA0gASgJUgRub3RlEhcKB29wX3VzZXIYDiABKAVSBm9wVXNlchIXCgdvcF90aW1lGA8gASgFUgZvcFRpbWUiPgoNUXVlcnlMaXN0UGFnZRIXCgdsaW5lX2lkGAEgASgFUgZsaW5lSWQSFAoFbGltaXQYAiABKAVSBWxpbWl0Km4KDENvbnRyYWN0VHlwZRIOCgpVbmtvd25UeXBlEAASFAoQSW52ZXJzZVBlcnBldHVhbBABEhMKD0xpbmVhclBlcnBldHVhbBACEhIKDkludmVyc2VGdXR1cmVzEAMSDwoLQ29udHJhY3RBbGwQQiotCghFeGVjVHlwZRIKCgZVUERBVEUQABIHCgNSVU4QARIMCghST0xMQkFDSxACQg1aC2NoYXJsZXMvZmVlYgZwcm90bzMK7QIKC2hlbGxvLnByb3RvEgVoZWxsbxoJZmVlLnByb3RvIiIKDEhlbGxvUmVxdWVzdBISCgROYW1lGAEgASgJUgROYW1lIkwKDUhlbGxvUmVzcG9uc2USEgoEQ29kZRgBIAEoCVIEQ29kZRInCgREYXRhGAIgASgLMhMuaGVsbG8uUmVzcG9uc2VEYXRhUgREYXRhIjQKDFJlc3BvbnNlRGF0YRISCgROYW1lGAEgASgJUgROYW1lEhAKA0FHRRgCIAEoCVIDQUdFMooBCgVIZWxsbxI3CghTYXlIZWxsbxITLmhlbGxvLkhlbGxvUmVxdWVzdBoULmhlbGxvLkhlbGxvUmVzcG9uc2UiABJIChBRdWVyeUZlZVJhdGVMaXN0EhguZmVlLlF1ZXJ5RmVlUmF0ZUxpc3RSZXEaGC5mZWUuUXVlcnlGZWVSYXRlTGlzdFJlcyIAQg9aDWNoYXJsZXMvaGVsbG9iBnByb3RvMw==');

export const options = {
    discardResponseBodies: true,
    scenarios: {
        scenarioCode92fb22b8775544cca7104c88c08e7c8e: {
            executor: 'ramping-vus', stages: [{ duration: '120s', target: 1 }], startVUs: 1, exec: 'scenarioExec0'
        }
    }
}

export function scenarioExec0() {
    const addr = "127.0.0.1:9090";
    //开启反射：reflect:true
    if (__ITER == 0) {
        client.connect(addr, { plaintext: true });
    }
    const response = client.invoke('hello.Hello/SayHello', { "Name": "aaaa" });
	// console.log(response)
}
