import { test, expect } from '@playwright/test';

test('deve exibir os dados financeiros e status da extranet', async ({ page }) => {
    // 1. Acessa a URL onde o Vite está rodando
    await page.goto('http://localhost:5173/');

    // 2. Valida se o título principal está na tela
    await expect(page.getByText('Extranet | Gestão de Franquia')).toBeVisible();

    // 3. Valida o valor das vendas (Diferencial: Garante que o Intl.NumberFormat funcionou)
    await expect(page.getByText('R$ 12.450,00')).toBeVisible();

    // 4. Valida a disponibilidade do sistema
    await expect(page.getByText('Operacional (99.9%)')).toBeVisible();
});