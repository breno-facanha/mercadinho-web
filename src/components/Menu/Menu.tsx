"use client"

import { LucideIcon, PackageSearch, Box, ShoppingCart, ChartNoAxesColumn, ChevronLeft, Menu as MenuIcon, ChevronRight, LayoutDashboard, Settings, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const iconMap: { [key: string]: LucideIcon } = {
    PackageSearch,
    ShoppingCart,
    Box,
    ChartNoAxesColumn,
    LayoutDashboard,
    Settings
}

interface MenuProps {
    onExpandChange?: (isExpanded: boolean) => void
}

export default function Menu({ onExpandChange }: MenuProps) {
    const [isExpanded, setIsExpanded] = useState(true)
    const [expandedSubmenu, setExpandedSubmenu] = useState<string | null>(null)

    const handleToggle = () => {
        setIsExpanded(!isExpanded)
        onExpandChange?.(!isExpanded)
    }

    const toggleSubmenu = (menuName: string) => {
        setExpandedSubmenu(expandedSubmenu === menuName ? null : menuName)
    }

    function renderMenuItem(url: string, icone: string, texto: string) {
        const IconComponent = iconMap[icone]

        return (
            <li className="group cursor-pointer hover:bg-[#E7FDEE] rounded mx-2 py-2">
                <Link
                    href={url}
                    className={`flex gap-3 items-center text-[#61896F] group-hover:text-green-500 transition-colors ${isExpanded ? 'pl-2 justify-start' : 'justify-center'}`}
                    title={isExpanded ? "" : texto}
                >
                    <IconComponent
                        size={24}
                        strokeWidth={2}
                        className="transition-colors flex shrink-0"
                    />
                    {isExpanded && (
                        <span className="whitespace-nowrap">
                            {texto}
                        </span>
                    )}
                </Link>
            </li>
        )
    }

    function renderMenuWithSubmenu(icone: string, texto: string, menuName: string, subItems: { url: string; label: string }[]) {
        const IconComponent = iconMap[icone]
        const isOpen = expandedSubmenu === menuName

        return (
            <li key={menuName} className="group">
                <button
                    onClick={() => toggleSubmenu(menuName)}
                    className={`w-full flex pr-4 gap-3 items-center text-[#61896F] group-hover:text-green-500 hover:bg-[#E7FDEE] rounded mx-2  py-2 transition-colors ${isExpanded ? 'pl-2 justify-start' : 'justify-center'}`}
                    title={isExpanded ? "" : texto}
                >
                    <IconComponent
                        size={24}
                        strokeWidth={2}
                        className="transition-colors flex shrink-0"
                    />
                    {isExpanded && (
                        <>
                            <span className="whitespace-nowrap flex-1 text-left">
                                {texto}
                            </span>
                            <ChevronDown
                                size={20}
                                strokeWidth={2}
                                className={`transition-transform flex shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                            />
                        </>
                    )}
                </button>
                {isExpanded && isOpen && (
                    <ul className="pl-8 mt-2 flex flex-col gap-1">
                        {subItems.map((item) => (
                            <li key={item.url} className="group cursor-pointer hover:bg-[#E7FDEE] rounded mx-2 py-2">
                                <Link
                                    href={item.url}
                                    className="flex gap-3 items-center text-[#61896F] group-hover:text-green-500 transition-colors pl-2"
                                >
                                    <span className="whitespace-nowrap text-sm">
                                        {item.label}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </li>
        )
    }

    return (
        <div className="flex flex-col h-full gap-4">
            <button
                onClick={handleToggle}
                className="flex items-center justify-center w-full p-2 hover:bg-[#E7FDEE] rounded text-[#61896F] hover:text-green-500 transition-colors"
                title={isExpanded ? "Minimizar menu" : "Expandir menu"}
            >
                {isExpanded ? (
                    <ChevronLeft size={24} strokeWidth={2.5} />
                ) : (
                    <ChevronRight size={24} strokeWidth={2.5} />
                )}
            </button>
            <ul className="flex flex-col gap-3 justify-center ">
                {renderMenuItem('/dashboard', 'LayoutDashboard', 'Dashboard')}
                {renderMenuItem('/produtos', 'PackageSearch', 'Produtos')}
                {renderMenuItem('/vendas', 'ShoppingCart', 'Realizar Venda')}
                {renderMenuItem('/relatorios', 'ChartNoAxesColumn', 'Relatórios')}
                {renderMenuWithSubmenu('Settings', 'Configurações', 'configuracoes', [
                    { url: '/tipoPagamento', label: 'Pagamento' },
                    { url: '/preferencias', label: 'Preferências' },
                    { url: '/seguranca', label: 'Segurança' },
                    { url: '/logout', label: 'Sair' },
                ])}
            </ul>
        </div>
    )
}