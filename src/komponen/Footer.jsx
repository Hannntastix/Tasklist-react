export default function Footer({ items }) {
    if (items.length === 0) return <footer className="stats">Yeyy Tidak Ada Tugas!!!</footer>;

    const totalItems = items.length;
    const checkedItems = items.filter((item) => item.checked).length;
    const percentage = Math.round((checkedItems / totalItems) * 100);

    return (
        <footer className="stats">
            Kamu memiliki {totalItems} Tugas, {checkedItems} Tugas yang sudah selesai ({percentage}%)
        </footer>
    );
}