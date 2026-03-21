import Link from "next/link";
import { ArrowLeft, LockKeyhole, Store } from "lucide-react";

export default function Login() {
    return (
        <main className="min-h-screen bg-[#F6F8F6] px-6 py-8 text-[#24282c] lg:px-10">
            <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center justify-center">
                <div className="grid w-full overflow-hidden rounded-[36px] border border-[#D9E5DD] bg-white shadow-[0_24px_80px_-48px_rgba(36,40,44,0.35)] lg:grid-cols-[1.1fr_0.9fr]">
                    <section className="hidden bg-[linear-gradient(160deg,#F7FFF9_0%,#E7FDEE_55%,#D0FBDE_100%)] p-8 sm:p-10 lg:block lg:p-12">
                        <Link
                            href="/home"
                            className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/80 px-4 py-2 text-sm font-semibold text-[#2f5d3b] transition hover:bg-white"
                        >
                            <ArrowLeft size={16} />
                            Voltar para home
                        </Link>

                        <div className="mt-10 max-w-xl">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-white text-[#16a34a] shadow-sm">
                                <Store size={30} strokeWidth={2.4} />
                            </div>

                            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#61896F]">Mercadinho Inteligente</p>
                            <h1 className="mt-3 text-4xl font-black leading-tight">
                                Entre no sistema e acompanhe a operacao em um unico lugar.
                            </h1>
                            <p className="mt-5 text-base leading-7 text-[#4d6155]">
                                Esta tela prepara o acesso ao ambiente de gestao para acompanhar estoque, saidas, vendas e relatorios.
                            </p>
                        </div>
                    </section>

                    <section className="p-8 sm:p-10 lg:p-12">
                        <div className="mx-auto max-w-md">
                            <Link
                                href="/home"
                                className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#D0FBDE] px-4 py-2 text-sm font-semibold text-[#14311d] transition hover:brightness-[1.03] lg:hidden"
                            >
                                <ArrowLeft size={16} />
                                Voltar para home
                            </Link>

                            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D0FBDE] text-[#16a34a]">
                                <LockKeyhole size={26} strokeWidth={2.4} />
                            </div>

                            <h2 className="text-3xl font-bold">Login</h2>
                            <p className="mt-3 text-sm leading-6 text-[#64748B]">
                                Interface inicial de acesso. Enquanto a autenticacao nao estiver conectada, voce pode seguir para o painel principal.
                            </p>

                            <form className="mt-8 space-y-5">
                                <div>
                                    <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#4d6155]">
                                        E-mail
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="gestor@mercadinho.com"
                                        className="w-full rounded-2xl border border-[#D9E5DD] bg-[#FCFDFC] px-4 py-3 text-sm outline-none transition placeholder:text-[#9AA7B2] focus:border-[#13EC5B]"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="senha" className="mb-2 block text-sm font-semibold text-[#4d6155]">
                                        Senha
                                    </label>
                                    <input
                                        id="senha"
                                        type="password"
                                        placeholder="Digite sua senha"
                                        className="w-full rounded-2xl border border-[#D9E5DD] bg-[#FCFDFC] px-4 py-3 text-sm outline-none transition placeholder:text-[#9AA7B2] focus:border-[#13EC5B]"
                                    />
                                </div>

                                <Link
                                    href="/dashboard"
                                    className="inline-flex w-full items-center justify-center rounded-2xl bg-[#13EC5B] px-6 py-4 text-base font-bold text-[#1c2a20] transition hover:bg-[#1BED60]"
                                >
                                    Entrar no sistema
                                </Link>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}