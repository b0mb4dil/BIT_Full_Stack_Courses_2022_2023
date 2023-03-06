<!DOCTYPE html>
<html>
    <head>
        <title>Transactions</title>
        <style>
            table {
                width: 100%;
                border-collapse: collapse;
                text-align: center;
            }

            table tr th, table tr td {
                padding: 5px;
                border: 1px #eee solid;
            }

            tfoot tr th, tfoot tr td {
                font-size: 20px;
            }

            tfoot tr th {
                text-align: right;
            }
        </style>
    </head>
    <body>
        <h1>TRANSTACTIONS</h1>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Check #</th>
                    <th>Description</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                <?php if(! empty($dataCSV)): ?>
                    <?php foreach($dataCSV as $data): ?>
                        <tr>
                            <!-- Nereikia echo, jei naudojama tokia syntax-->
                            <td><?=  formatDate($data['date']) ?></td>
                            <td><?=  $data['checkNum'] ?></td>
                            <td><?=  $data['description'] ?></td>
                            <td>
                                <span style="color: <?php echo $data['amount'] < 0 ? 'red' : 'green' ?>;">
                                        <?=  formatDollarAmount($data['amount']) ?>
                                </span>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                <?php endif ?>
            </tbody>
            <tfoot>
                <tr>
                    <th colspan="3">Total Income:</th>
                    <td><?= formatDollarAmount($totals['totalIncome'] ?? 0) ?></td>
                </tr>
                <tr>
                    <th colspan="3">Total Expense:</th>
                    <td><?= formatDollarAmount($totals['totalExpense'] ?? 0) ?></td>
                </tr>
                <tr>
                    <th colspan="3">Net Total:</th>
                    <td>
                        <span style="color: <?php echo $totals['netTotal'] < 0 ? 'red' : 'green' ?>;">
                            <?= formatDollarAmount($totals['netTotal'] ?? 0) ?>
                        </span>
                    </td>
                </tr>
            </tfoot>
        </table>
    </body>
</html>
