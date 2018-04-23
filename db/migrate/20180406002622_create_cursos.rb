class CreateCursos < ActiveRecord::Migration[5.0]
  def change
    create_table :cursos do |t|
      t.string :nome
      t.string :professor
      t.string :alunos
      t.text :observacao

      t.timestamps
    end
  end
end
