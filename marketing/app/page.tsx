import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Battery, Clock, Cpu, Gamepad2, Palette, Zap} from "lucide-react"
import Image from "next/image"

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <nav className="bg-gray-950 text-white py-3">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <div className="text-2xl font-bold">
                            Next<span className="text-[#9B2256]">UI</span>
                        </div>
                        <div className="space-x-4">
                            <a href="/docs" className="invisible lg:visible">
                                <Button variant="ghost">Documentation</Button>
                            </a>
                            <a href="https://discord.gg/HKd7wqZk3h" target="_blank" className="invisible lg:visible">
                                <Button variant="ghost">Discord Community</Button>
                            </a>
                            <a href="https://github.com/LoveRetro/NextUI/releases" target="_blank"
                               className="invisible lg:visible">
                                <Button variant="ghost">Download</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="flex-grow">
                <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="md:w-1/2 text-left">
                                <h1 className="text-5xl font-bold mb-6">
                                    Next<span className="text-[#9B2256]">UI</span>: Elevate Your Handheld Gaming
                                    Experience
                                </h1>
                                <p className="text-xl mb-8">Custom firmware and launcher for TrimUI Brick and Smart
                                    Pro.</p>
                                <a href="https://github.com/LoveRetro/NextUI/releases" target="_blank">
                                    <Button size="lg" className="bg-[#9b2256] hover:bg-[#8a1e4c] text-white font-bold">
                                        Download Now
                                    </Button>
                                </a>

                                <a href="/docs">
                                    <Button size="lg"
                                            className="bg-[#9b2256] hover:bg-[#8a1e4c] text-white font-bold ml-4">
                                        Browse Documentation
                                    </Button>
                                </a>
                            </div>
                            <div className="md:w-1/2 flex justify-center">
                                <Image
                                    src="/images/brick-nextui-animated-white.webp"
                                    alt="NextUI on handheld device"
                                    width={400}
                                    height={400}
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-[#292929] text-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <FeatureCard
                                icon={<Gamepad2 className="w-12 h-12 text-[#9b2256]"/>}
                                title="Enhanced Gaming"
                                description="Enjoy lower latency and fixed screen tearing / sync stutter."
                                imageUrl="/images/spiderman.png"
                            />
                            <FeatureCard
                                icon={<Zap className="w-12 h-12 text-[#9b2256]"/>}
                                title="Game Art"
                                description="Bring your collection to life with box art."
                                imageUrl="/images/game-art.png"
                            />
                            <FeatureCard
                                icon={<Palette className="w-12 h-12 text-[#9b2256]"/>}
                                title="Customization"
                                description="Personalize your UI with backgrounds, fonts, and LED controls."
                                imageUrl="/images/led-control.png"
                            />
                            <FeatureCard
                                icon={<Clock className="w-12 h-12 text-[#9b2256]"/>}
                                title="Game Time Tracking"
                                description="Keep track of your gaming sessions with built-in time tracking."
                                imageUrl="/images/game-tracker.png"
                            />
                            <FeatureCard
                                icon={<Cpu className="w-12 h-12 text-[#9b2256]"/>}
                                title="Advanced Features"
                                description="Our emulator cores have cheats, overlays, and high-quality audio."
                                imageUrl="/images/overlay.png"
                            />
                            <FeatureCard
                                icon={<Battery className="w-12 h-12 text-[#9b2256]"/>}
                                title="Power Management"
                                description="Deep Sleep mode and battery monitoring for extended play sessions."
                                imageUrl="/images/battery.png"
                            />
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-gray-100">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-8">Compatible Devices</h2>
                        <div className="flex flex-wrap justify-center gap-8 items-end">
                            <DeviceCard name="TrimUI Brick" imageUrl="/images/trimui-brick.png" width={250}/>
                            <DeviceCard name="TrimUI Smart Pro" imageUrl="/images/trimui-smart-pro.png" width={500}/>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-950 text-white text-lg py-8">
                <div className="container mx-auto px-4 text-center">
                    <p className="mb-2">
                        &copy; 2025 Next<span className="text-[#9B2256] font-bold">UI</span> Contributors
                    </p>
                    <span className="font-semibold">
                        A <a href="https://github.com/LoveRetro" target="_blank"><span
                        className="text-[#9B2256]">LoveRetro</span></a>  Project</span>
                </div>
            </footer>
        </div>
    )
}

function FeatureCard({icon, title, description, imageUrl}) {
    return (
        <Card className="bg-gray-800 border-gray-700 text-white overflow-hidden">
            <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                    {icon}
                    <span>{title}</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <CardDescription className="text-gray-300">{description}</CardDescription>
                <div className="rounded-md overflow-hidden">
                    <Image
                        src={imageUrl || "/placeholder.svg"}
                        alt={`${title} feature`}
                        width={250}
                        height={150}
                        className="w-full object-cover"
                    />
                </div>
            </CardContent>
        </Card>
    )
}

function DeviceCard({name, imageUrl, width}) {
    return (
        <div className="text-center items-end">
            <Image src={imageUrl || "/placeholder.svg"} alt={name} width={width} height={0} className="mx-auto mb-4"/>
            <h3 className="text-xl font-semibold">{name}</h3>
        </div>
    )
}

