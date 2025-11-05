import Background from "./components/background"

type Props = {
  params: Promise<{ customerID: string }>
}

export default async function Page({ params }: Props) {
  const { customerID } = await params

  return (
    <div className="relative min-h-dvh text-white">
      <Background />
      {customerID}
    </div>
  )
}
