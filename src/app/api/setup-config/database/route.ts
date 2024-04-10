import SetupConfig from "@/app/_lib/service/setupConfig";

const setupConfigService = new SetupConfig()

export async function POST(request: Request) {
    const payload = await request.json()

    const res = await setupConfigService.dbConnection(JSON.parse(payload))
    return Response.json({ data: res })
}