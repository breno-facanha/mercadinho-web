"use client"

import { PackageSearch, Box, ShoppingCart, ChartNoAxesColumn, ChevronLeft, Menu as MenuIcon, ChevronRight, LayoutDashboard } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const iconMap: { [key: string]: React.ComponentType<{ size: number }> } = {
    PackageSearch,
    ShoppingCart,
    Box,
    ChartNoAxesColumn,
    LayoutDashboard
}

interface MenuProps {
    onExpandChange?: (isExpanded: boolean) => void
}

export default function Menu({ onExpandChange }: MenuProps) {
    const [isExpanded, setIsExpanded] = useState(true)

    const handleToggle = () => {
        setIsExpanded(!isExpanded)
        onExpandChange?.(!isExpanded)
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
                        className="transition-colors flex-shrink-0"
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
            <ul className="flex flex-col gap-3">
                {renderMenuItem('/dashboard', 'LayoutDashboard', 'Dashboard')}
                {renderMenuItem('/produtos', 'PackageSearch', 'Produtos')}
                {renderMenuItem('/vendas', 'ShoppingCart', 'Realizar Venda')}
                {renderMenuItem('/relatorios', 'ChartNoAxesColumn', 'Relatórios')}
            </ul>
        </div>
    )
}