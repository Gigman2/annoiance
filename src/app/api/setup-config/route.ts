import SetupConfig from "@/app/_lib/service/setupConfig";

const setupConfigService = new SetupConfig()
export async function GET() {
    const fileExist = setupConfigService.fileExist()
    return Response.json(fileExist)
}

export async function POST(request: Request) {
    const payload = await request.json()

    const res = setupConfigService.createOrUpdateFile(payload)

    return Response.json({ data: res })
}