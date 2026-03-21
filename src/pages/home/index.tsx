import Link from "next/link";
import {
	ArrowRight,
	Boxes,
	CheckCircle2,
	ChartColumn,
	PackageCheck,
	ReceiptText,
	ScanLine,
	ShoppingCart,
	Store,
} from "lucide-react";

const propositos = [
	{
		titulo: "Controle de entrada de produtos",
		descricao:
			"Registre novas mercadorias com rapidez para manter o estoque sempre atualizado desde a chegada.",
		icone: ScanLine,
	},
	{
		titulo: "Controle de estoque",
		descricao:
			"Acompanhe entradas, reposicao e disponibilidade dos produtos em tempo real.",
		icone: Boxes,
	},
	{
		titulo: "Controle de saida",
		descricao:
			"Registre cada movimentacao com clareza para evitar perdas e rupturas no caixa.",
		icone: ScanLine,
	},
	{
		titulo: "Vendas",
		descricao:
			"Agilize o atendimento com processos de venda simples, organizados e objetivos.",
		icone: ShoppingCart,
	},
	{
		titulo: "Relatorios",
		descricao:
			"Transforme os dados do mercadinho em informacoes uteis para decidir melhor.",
		icone: ChartColumn,
	},
];

const destaques = [
	"Entrada e reposicao de mercadorias com mais controle",
	"Saidas registradas para evitar divergencias no estoque",
	"Vendas organizadas com mais rapidez no atendimento",
	"Relatorios para acompanhar desempenho e tomada de decisao",
];

export default function Home() {
	return (
		<main className="min-h-screen bg-[#F6F8F6] text-[#24282c]">
			<section className="relative overflow-hidden">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(19,236,91,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(208,251,222,0.95),transparent_30%)]" />

				<div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 lg:px-10">
					<header className="mb-12 flex items-center justify-between gap-4 rounded-full border border-[#E2E8F0] bg-white/90 px-4 py-3 shadow-sm backdrop-blur">
						<div className="flex items-center gap-3">
							<div className="rounded-2xl bg-[#D0FBDE] p-3 text-[#16a34a]">
								<Store size={24} strokeWidth={2.4} />
							</div>

							<div>
								<p className="text-lg font-bold">Mercadinho</p>
								<p className="text-sm text-[#61896F]">Gestao inteligente para a rotina do caixa</p>
							</div>
						</div>

						<Link
							href="/login"
							className="inline-flex items-center gap-2 rounded-full border border-[#CFE8D7] bg-white px-5 py-2 text-sm font-semibold text-[#2f5d3b] transition hover:border-[#13EC5B] hover:bg-[#E7FDEE]"
						>
							Fazer login
							<ArrowRight size={16} />
						</Link>
					</header>

					<div className="grid flex-1 items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_420px]">
						<div className="max-w-3xl">
							<span className="mb-4 inline-flex rounded-full border border-[#CFE8D7] bg-[#E7FDEE] px-4 py-2 text-sm font-semibold text-[#2f5d3b]">
								Operacao mais organizada do estoque ao fechamento
							</span>

							<h1 className="max-w-2xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
								Controle tudo no seu mercadinho com mais rapidez e menos retrabalho.
							</h1>

							<p className="mt-6 max-w-2xl text-base leading-7 text-[#5f6b63] sm:text-lg">
								O Mercadinho Inteligente centraliza os processos essenciais do negocio para voce acompanhar estoque,
								saidas, vendas e relatorios em um fluxo simples e visual.
							</p>

							<div className="mt-8 grid gap-4 sm:grid-cols-3">
								<div className="rounded-3xl border border-[#D9E5DD] bg-white/90 p-5 shadow-sm">
									<div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D0FBDE] text-[#16a34a]">
										<PackageCheck size={22} strokeWidth={2.4} />
									</div>
									<p className="text-sm font-semibold text-[#61896F]">Entradas monitoradas</p>
									<p className="mt-2 text-2xl font-black">100%</p>
									<p className="mt-2 text-sm leading-6 text-[#64748B]">
										Mais clareza desde a chegada dos produtos ate a disponibilidade no estoque.
									</p>
								</div>

								<div className="rounded-3xl border border-[#D9E5DD] bg-white/90 p-5 shadow-sm">
									<div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D0FBDE] text-[#16a34a]">
										<ShoppingCart size={22} strokeWidth={2.4} />
									</div>
									<p className="text-sm font-semibold text-[#61896F]">Vendas mais ageis</p>
									<p className="mt-2 text-2xl font-black">Fluxo simples</p>
									<p className="mt-2 text-sm leading-6 text-[#64748B]">
										Atendimento direto para reduzir retrabalho e acelerar a operacao do caixa.
									</p>
								</div>

								<div className="rounded-3xl border border-[#D9E5DD] bg-white/90 p-5 shadow-sm">
									<div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D0FBDE] text-[#16a34a]">
										<ReceiptText size={22} strokeWidth={2.4} />
									</div>
									<p className="text-sm font-semibold text-[#61896F]">Relatorios praticos</p>
									<p className="mt-2 text-2xl font-black">Visao rapida</p>
									<p className="mt-2 text-sm leading-6 text-[#64748B]">
										Informacoes organizadas para acompanhar o desempenho sem perder tempo.
									</p>
								</div>
							</div>

							<div className="mt-8 rounded-4xl border border-[#D9E5DD] bg-white/80 p-6 shadow-sm backdrop-blur">
								<div className="mb-4 flex items-center gap-3">
									<div className="rounded-2xl bg-[#D0FBDE] p-3 text-[#16a34a]">
										<CheckCircle2 size={20} strokeWidth={2.4} />
									</div>
									<div>
										<p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#61896F]">
											O que voce ganha
										</p>
										<h2 className="text-2xl font-bold">Uma operacao mais previsivel e organizada</h2>
									</div>
								</div>

								<div className="grid gap-3 sm:grid-cols-2">
									{destaques.map((item) => (
										<div
											key={item}
											className="flex items-start gap-3 rounded-2xl border border-[#E2E8F0] bg-[#FCFDFC] px-4 py-4"
										>
											<CheckCircle2 size={18} strokeWidth={2.6} className="mt-0.5 shrink-0 text-[#16a34a]" />
											<p className="text-sm leading-6 text-[#4f5f56]">{item}</p>
										</div>
									))}
								</div>
							</div>

							<div className="mt-8 flex flex-col gap-4 sm:flex-row">
								<Link
									href="/login"
									className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#13EC5B] px-6 py-4 text-base font-bold text-[#1c2a20] shadow-[0_18px_40px_-24px_rgba(19,236,91,0.95)] transition hover:bg-[#1BED60]"
								>
									Acessar login
									<ArrowRight size={18} />
								</Link>

								<Link
									href="/dashboard"
									className="inline-flex items-center justify-center rounded-2xl border border-[#D7E1DA] bg-white px-6 py-4 text-base font-semibold text-[#2f5d3b] transition hover:border-[#13EC5B] hover:bg-[#E7FDEE]"
								>
									Ver dashboard
								</Link>
							</div>
						</div>

						<div className="rounded-4xl border border-[#D9E5DD] bg-white p-6 shadow-[0_24px_80px_-48px_rgba(36,40,44,0.35)] sm:p-8">
							<div className="mb-8 flex items-start justify-between gap-4">
								<div>
									<p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#61896F]">
										Propositos do sistema
									</p>
									<h2 className="mt-2 text-2xl font-bold">Base operacional do mercadinho</h2>
								</div>

								<div className="rounded-2xl bg-[#D0FBDE] p-3 text-[#16a34a]">
									<Store size={22} strokeWidth={2.4} />
								</div>
							</div>

							<div className="space-y-4">
								{propositos.map(({ titulo, descricao, icone: Icone }) => (
									<article
										key={titulo}
										className="rounded-3xl border border-[#E2E8F0] bg-[#FCFDFC] p-5 transition hover:-translate-y-1 hover:border-[#BEE8C9] hover:bg-[#F4FFF7]"
									>
										<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D0FBDE] text-[#16a34a]">
											<Icone size={22} strokeWidth={2.4} />
										</div>

										<h3 className="text-lg font-bold">{titulo}</h3>
										<p className="mt-2 text-sm leading-6 text-[#64748B]">{descricao}</p>
									</article>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
