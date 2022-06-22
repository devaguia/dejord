const mongoose = require('../../database')
const bcrypt = require('bcryptjs')

//ToDo:. CREATE CONTRACT FRONT/BACK INTERNAL
const InternalSchema = new mongoose.Schema({
    data_entrada: {
        type: String
      },
      data_saida: {
        type: String
      },
      motivo_saida: {
        type: String
      },
      residente: {
        nome: {
          type: String
        },
        apelido: {
          type: String
        },
        nome_pai: {
          type: String
        },
        nome_mae: {
          type: String
        },
        naturalidade: {
          type: String
        },
        data_nascimento: {
          type: String
        },
        caracteristicas: {
          altura: {
            type: Number
          },
          peso: {
            type: Number
          },
          etnia_cor: {
            type: String
          },
          cabelo: {
            type: String
          },
          olhos: {
            type: String
          },
          cicatriz: {
            type: Boolean
          },
          deficiencia: {
            type: String
          }
        },
        crenca: {
          type: String
        },
        ecolaridade: {
          type: String
        },
        profissao: {
          type: String
        },
        saude: {
          plano_saude: {
            type: String
          },
          ultima_consulta: {
            data: {
              type: String
            },
            motivo: {
              type: String
            }
          },
          exame_rotina: {
            data: {
              type: String
            },
            motivo: {
              type: String
            }
          },
          dentista: {
            data: {
              type: String
            },
            motivo: {
              type: String
            }
          },
          medicamentos: {
            nome: {
                type: String
              },
              tratamento_completo: {
                type: Boolean
              }
          },
          teste_hiv: {
            type: Boolean
          },
          relacoes_homolossexuais: {
            type: Boolean
          },
          ansidade: {
            type: Boolean
          },
          depressao: {
            type: Boolean
          },
          doencas: {
            type: [
              String
            ]
          },
          acompanhamento_medico: {
            type: String
          }
        },
        dependencias: {
            substacia: {
                type: String
              },
              tempo: {
                type: String
              },
              frequencia: {
                type: String
              }
        },
        endereco: {
          rua: {
            type: String
          },
          numero: {
            type: Number
          },
          bairro: {
            type: String
          },
          cidade: {
            type: String
          },
          estado: {
            type: String
          }
        },
        contato: {
          telefone_residencial: {
            type: String
          },
          telefone_celular: {
            type: String
          }
        },
        documentos: {
          rg: {
            type: String
          },
          cpf: {
            type: String
          },
          ctps: {
            type: String
          },
          cnh: {
            type: String
          }
        }
      },
      responsavel: {
        nome: {
          type: String
        },
        parentesco: {
          type: String
        },
        endereco: {
          rua: {
            type: String
          },
          numero: {
            type: Number
          },
          bairro: {
            type: String
          },
          cidade: {
            type: String
          },
          estado: {
            type: String
          }
        },
        contato: {
          telefone_residencial: {
            type: String
          },
          telefone_celular: {
            type: String
          }
        }
      },
      grupo_familiar: {
        nome: {
            type: String
          },
          idade: {
            type: String
          },
          parentesco: {
            type: String
          },
          renda: {
            type: String
          }
      },
      renda_familiar: {
        despesas: {
          itens: [{
            nome: {
                type: String
                },
                valor: {
                type: Number
                }
          }],
          total: {
            type: Number
          }
        },
        beneficios: {
          bolsa_familia: {
            type: Boolean
          },
          aposentadoria: {
            type: Boolean
          },
          outros: {
            type: String
          }
        }
      },
      dependentes: {
        itens: [{
            nome: {
                type: String
              },
              idade: {
                type: Number
              },
              responsavel: {
                type: String
              },
              pensao: {
                type: Boolean
              },
              valor_pensao: {
                type: Number
              }
            }
        ],
        quantidade: {
          type: Number
        }
      },
      domicilio: {
        area: {
          type: String
        },
        situacao: {
          type: String
        },
        numero_comodos: {
          type: Number
        },
        numero_banheiros: {
          type: Number
        },
        moveis_basicos: {
          type: Boolean
        }
      },
    updateList: [{
        _id : false,
        date: {
            type: Date
        },
        message: {
            type: String
        }
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const Internal = mongoose.model('Internal', InternalSchema)
module.exports = Internal