import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { clientsDescription } from './resources/clients';
import { serversDescription } from './resources/servers';

export class OpenapiGeneratorTech implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Openapi Generator Tech',
		name: 'N8nDevOpenapiGeneratorTech',
		icon: { light: 'file:./openapi-generator-tech.svg', dark: 'file:./openapi-generator-tech.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'An online openapi generator server. You can find out more at https://github.com/OpenAPITools/openapi-generator',
		defaults: { name: 'Openapi Generator Tech' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevOpenapiGeneratorTechApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Clients",
					"value": "Clients",
					"description": ""
				},
				{
					"name": "Servers",
					"value": "Servers",
					"description": ""
				}
			],
			"default": ""
		},
		...clientsDescription,
		...serversDescription
		],
	};
}
