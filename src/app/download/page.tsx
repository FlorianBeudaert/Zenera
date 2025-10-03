import { FaWindows, FaApple, FaLinux } from 'react-icons/fa';

const downloads = [
	{
		name: 'Windows',
		icon: <FaWindows size={48} color="#0078D6" />,
		link: '/downloads/Sianox-Launcher-win-x64.exe',
		bg: 'from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300',
	},
	{
		name: 'Mac',
		icon: <FaApple size={48} color="#333" />,
		link: '/downloads/Sianox-Launcher-mac-universal.dmg',
		bg: 'from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300',
	},
	{
		name: 'Linux',
		icon: <FaLinux size={48} color="#222" />,
		link: '/downloads/Sianox-Launcher-linux-x86_64.AppImage',
		bg: 'from-green-100 to-green-200 hover:from-green-200 hover:to-green-300',
	},
];

export default function DownloadPage() {
	return (
		<div className="min-h-screen flex flex-col justify-start items-center bg-gradient-to-br from-primary/10 via-white/60 to-primary-hover/20 py-8 px-4">
			<div className="max-w-2xl w-full text-center mb-10 mt-8">
				<h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 drop-shadow-lg">
					Télécharger le launcher
				</h1>
				<p className="text-xl text-gray-700 mb-6">
					Choisissez votre système d’exploitation pour télécharger le launcher Minecraft custom.
				</p>
			</div>
			<div className="flex flex-col md:flex-row gap-8">
				{downloads.map(({ name, icon, link, bg }) => (
					<a
						key={name}
						href={link}
						className={`flex flex-col items-center p-8 rounded-2xl shadow-xl border border-primary/10 bg-gradient-to-br ${bg} transition-transform hover:-translate-y-2 hover:shadow-2xl min-w-[180px]`}
						download
					>
						{icon}
						<span className="mt-6 text-xl font-bold text-gray-900">{name}</span>
					</a>
				))}
			</div>
		</div>
	);
}